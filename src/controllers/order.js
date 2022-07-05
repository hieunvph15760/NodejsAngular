import OrderChema from "../modules/order.js";
import OrderDetails from "../modules/orderDetails.js";

export const createOrder = async (req,res) =>{
    try {
        const order = await new OrderChema(req.body).save();
        res.json(order);
    } catch (error) {
        return res.status(400).json({
            message:"Không tạo được đơn hàng !"
        })
    }
}

export const getAllOrder = async (req,res) =>{
    try {
        const order = await OrderChema.find({}).exec();
        res.json(order)
    } catch (error) {
        return res.status(400).json({
            message:"Không lấy được đơn hàng !"
        })
    }
}

export const getAllOrderDetails = async (req,res) =>{
    try {
        const orderId = await OrderChema.findOne({_id: req.params.id}).exec();
        const orderDetails = await OrderDetails.find({order:orderId}).populate('order').select('-order').exec();
        res.json(orderDetails);
    } catch (error) {
        return res.status(400).json({
            message:"Không lấy được đơn hàng !"
        })
    }
}