'use client'
import { useUser } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


interface HeartFavoriteProps {
  product: ProductType,
  updateSignedInUser?: (updateUser: UserType )=> void
}


const HeartFavorite = ({ product, updateSignedInUser }: HeartFavoriteProps) => {
    const router = useRouter();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  // const [signedInUser, setSignedInUser] = useState<UserType | null>(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  const getUser = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/users");
      const data = await res.json();
      // setSignedInUser(data);
      setIsLiked(data.wishlist.includes(product._id));
      setLoading(false);
    } catch (error) {
      console.log("Users_GET", error);
    }
  };

  const handleLike = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    
    {
      // we can remove e because we use div not Link
      e.preventDefault()

      try {
        if (!user) {
          router.push("sign-in");
          return;
        } else {
          setLoading(true);
          const res = await fetch("/api/users/wishlist", {
            method: "POST",
            body: JSON.stringify({ productId: product._id }),
          });
          const updatedUser = await res.json();
          setIsLiked(updatedUser.wishlist.includes(product._id));
          // setSignedInUser(updatedUser);
          updateSignedInUser && updateSignedInUser(updatedUser)
        }
      } catch (error) {
        console.log("Wishlist_POST", error);
      }
    };
  return (
    <button onClick={handleLike}>
          <Heart fill={`${isLiked ? "red" : "white"}`} className="border-0" />
        </button>
  )
}

export default HeartFavorite