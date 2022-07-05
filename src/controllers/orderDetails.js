import OrderDetailsSchema from "../modules/orderDetails.js";

export const createOderDetails = async (req,res) =>{
    try {
        const orderDetails = await new OrderDetailsSchema(req.body).save();
        res.json(orderDetails);
    } catch (error) {
        return res.status(400).json({
            message:"Không tạo được chi tiết đơn hàng !"
        })
    }
}