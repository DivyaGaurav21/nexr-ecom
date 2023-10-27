import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/backend/config/dbConnect'
import { Product } from '@/backend/models/product';

// connectDatabase();

//---------------get single todo list -------------------//
export async function GET(request: NextResponse, { params }: { params: { singleProductId: string } }) {
    try {
        const { singleProductId } = params;
        dbConnect()
        const singleProductDetail = await Product.findById(singleProductId);
        return NextResponse.json({
            message: "single todo fetch successfully",
            success: true,
            singleProductDetail
        },
            { status: 200 }
        )
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 502 }
        )
    }
}