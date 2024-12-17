import VoucherDetailPage from "../features/vouchers/pages/VoucherDetailPage"
import VoucherPage from "../features/vouchers/pages/VoucherPage"

const voucherRoute = [
    {
        path:"vouchers",
        element:<VoucherPage />
    },
    {
        path:"vouchers/:id",
        element:<VoucherDetailPage />
    }
]
export default voucherRoute