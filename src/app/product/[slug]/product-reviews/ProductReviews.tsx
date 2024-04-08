import Heading from "@/components/ui/Heading"
import Modal from "@/components/ui/modal/Modal"
import { useAuth } from "@/hooks/useAuth"
import { IReview } from "@/types/reviews.interface"
import { useState } from "react"
import LeaveReviewForm from "./LeaveReviewForm"
import ReviewItem from "./ReviewItem"


interface IProductReviews {
   reviews: IReview[]
   productId: number
}

export default function ProductReviews({ reviews, productId }: IProductReviews) {   
   const [isModalOpen, setIsModalOpen] = useState(false)   
   const { user } = useAuth()   

   if (!reviews.length) return null   

   return (
      <section id='reviews' className="mt-20 text-black">
         <div className="mb-9">
            <Heading className="mb-3">Reviews: </Heading>   
            {user && (
               <button className="text-aqua" onClick={() => setIsModalOpen(true)}>
                  Leave review
               </button>
            )}
         </div>   

         {user && (
            <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
               <LeaveReviewForm productId={productId} />
            </Modal>
         )}

         <div className="grid grid-cols-4 gap-10">
               {reviews.map(review => (
                  <ReviewItem key={review.id} review={review} />
               ))}
         </div>
      </section>
   )
}
