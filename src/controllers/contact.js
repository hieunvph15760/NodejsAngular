import ContactSchema from "../modules/contact";

export const createContact = async(req,res) =>{
    try {
        const contact = await new ContactSchema(req.body).save();
        res.json(contact);
    } catch (error) {
        return res.status(400).json({
            message:"Không thêm được nội dung !"
        })
    }
}


export const getAllContact = async(req,res) =>{
    try {
        const contact = await ContactSchema.find({}).exec();
        res.json(contact);
    } catch (error) {
        return res.status(400).json({
            message:"Không thêm được nội dung !"
        })
    }
}

export const removeContact = async (req,res) =>{
    try {
        const contact = await ContactSchema.findOneAndDelete({_id:req.params.id}).exec();
        res.json(contact);
    } catch (error) {
        return res.status(400).json({
            message:"Không xóa được nội dung !"
        })
    }
}