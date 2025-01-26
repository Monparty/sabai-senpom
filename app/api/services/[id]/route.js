import { NextResponse } from "next/server"
import { services } from '../../../data/services'

export async function GET(request, context) {
    const { params } = context;
    const service = services.find((x) => x.id.toString() === params.id);
    
    if (!service) {
        return NextResponse.json({ error: 'service not found' }, { status: 404 });
    }
    
    return NextResponse.json(service);
}
