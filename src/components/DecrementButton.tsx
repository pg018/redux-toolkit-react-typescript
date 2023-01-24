import {useAppDispatch} from '../stateStore'
import { IncDecServices } from '../reducers/IncDecSlice'

const DecrementButton = ({value}: {value: number | undefined}) => {
  const dispatch = useAppDispatch()

  const DecrementButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!value) {
      dispatch(IncDecServices.actions.decrementNumber())
    } else {
      dispatch(IncDecServices.actions.decrementUserValue(value))
    }
  }

  return (
    <button onClick={DecrementButtonClickHandler}>
      Decrement
    </button>
  )
}

export default DecrementButton
