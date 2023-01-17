import Skeleton from 'react-loading-skeleton';
import '../../../Dropdown.css';
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonRow({ index, currentRowIndex, setCurrentRow, className, loading }) {
  return (
    <>
      <Skeleton style={{ borderRadius: '10px' }} baseColor="#202020" inline="false" highlightColor="#444" width="100%" height="112px" >
      </Skeleton>
      <div className='result-item-divider'> </div>

    </>
  )
}