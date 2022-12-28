import '../style/RemainderPage.css';

export default function RemainderTableRow({ item }) {

  // const changeCount = () => {
  //   setIsEditCount(true)
  // }
  // const saveEditedCount = () => {
  //   newComponents[indexCurrentComponent].count = Number(editCount);
  //   setComponents(newComponents);
  //   setIsEditCount(false);
  // }
  return (
    <div className='remainderTableRow'>
        <div className='idColumn'>{item.id}</div>
        <div className='nameColumn'>{item.name}</div>
        <div className='numberColumn'>{item.article}</div>
        <div className='numberColumn'>{item.count}</div>
    </div>
  )
}
