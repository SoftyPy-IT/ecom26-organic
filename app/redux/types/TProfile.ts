export interface ProfileResponse {
  success: boolean;
  message: string;
  data: UserProfile;
}

export interface UserProfile {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "admin" | string;
  status: "active" | "inactive" | string;
  isVerified: boolean;
  hasShippingAddress: boolean;
  orders: Order[];
  wishlist: WishlistItem[];
  paymentHistory: PaymentHistoryItem[];
  reviews: Review[];
  isDeleted: boolean;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  _id: string;
  name: string;
  phone: string;
  userId: string;
  isGuestCheckout: boolean;
  hasCoupon: boolean;
  shippingCharge: number;
  paymentMethod: string;
  orderItems: OrderItem[];
  shippingAddress: ShippingAddress;
  subTotal: number;
  total: number;
  status: "pending" | "completed" | "cancelled" | string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ShippingAddress {
  line1: string;
  division: string;
  district: string;
  country: string;
}

export interface OrderItem {
  _id: string;
  productId: string;
  name: string;
  code: string;
  quantity: number;
  price: number;
  thumbnail: string;
  variants: any[]; // Can extend with specific variant type later
}

export interface WishlistItem {
  // Define properties of wishlist items if needed
  [key: string]: any;
}

export interface PaymentHistoryItem {
  // Define payment history properties if needed
  [key: string]: any;
}

export interface Review {
  // Define review properties if needed
  [key: string]: any;
}
