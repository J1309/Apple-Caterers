import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, place, eventType, eventDate, eventTime, venue, guestCount, items, message, source } = body;

    // Validation
    if (!name || !eventType || !eventDate || !guestCount) {
      return NextResponse.json(
        { success: false, error: 'Missing required enquiry fields' },
        { status: 400 }
      );
    }

    const enquiryPayload = {
      id: `ENQ-${Date.now()}`,
      createdAt: new Date().toISOString(),
      client: {
        name,
        place,
      },
      event: {
        type: eventType,
        date: eventDate,
        time: eventTime,
        venue,
        guestCount: Number(guestCount),
      },
      dishes: items || [],
      notes: message || '',
      source: source || 'cart_checkout',
    };

    console.log('[ENQUIRY_RECEIVED]', JSON.stringify(enquiryPayload, null, 2));

    // =========================================================================
    // 🔌 DATABASE CONNECTION HOOK FOR USER:
    // Insert your Database / Prisma / Supabase / Convex / Firebase code here.
    // Example:
    // await db.enquiry.create({ data: enquiryPayload });
    // =========================================================================

    return NextResponse.json({
      success: true,
      message: 'Enquiry recorded successfully. Ready for WhatsApp dispatch.',
      enquiryId: enquiryPayload.id,
      timestamp: enquiryPayload.createdAt,
    });
  } catch (error) {
    console.error('[ENQUIRY_API_ERROR]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process enquiry' },
      { status: 500 }
    );
  }
}
