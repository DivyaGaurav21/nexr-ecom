import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/backend/config/dbConnect'
import { Product } from '@/backend/models/product';

// connectDatabase();

//---------------get single todo list -------------------//
export async function GET(request, { params }) {
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
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 502 }
        )
    }
}