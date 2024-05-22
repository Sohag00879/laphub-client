import { useState } from "react";
import { Button } from "antd";

type LoadMoreButtonProps = {
  totalProducts: number;
  onLoadMore: (count: number) => void;
};

const LoadMoreButton = ({ totalProducts, onLoadMore }: LoadMoreButtonProps) => {
  const [visibleCount, setVisibleCount] = useState(12);

  const loadMoreProducts = () => {
    const newCount = visibleCount + 12;
    setVisibleCount(newCount);
    onLoadMore(newCount);
  };

  return (
    <div className="flex justify-center mt-5">
      {visibleCount < totalProducts && (
        <Button color="primary" onClick={loadMoreProducts}>
          Load More
        </Button>
      )}
    </div>
  );
};

export default LoadMoreButton;
