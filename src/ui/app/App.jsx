import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ItemsViewContainer } from '../features/items/ItemsViewContainer'
import { ModalBuy } from '../features/modals/ModalBuy'
import { ErrorSnackbar } from '../common/error-snackbar/ErrorSnackbar'
import { appSelectors } from '../../bll/app-reducer'
import s from './App.module.scss'
import { SubmitReport } from '../features/report/SubmitReport'

function App() {
  const appError = useSelector(appSelectors.selectorError)

  const [currentCustomer, setCurrentCustomer] = useState({})
  const [currentItem, setCurrentItem] = useState({})
  const [showModalBuy, setShowModalBuy] = useState(false)
  const [showReport, setShowReport] = useState(false)

  const onShowModal = (item) => {
    setCurrentItem(item)
    setShowModalBuy(true)
  }

  return (
    <div className={s.app}>
      <ItemsViewContainer show={showModalBuy} onShowModal={onShowModal} />
      <ModalBuy
        currentItem={currentItem}
        show={showModalBuy}
        setShow={setShowModalBuy}
        setCurrentCustomer={setCurrentCustomer}
        setShowReport={setShowReport}
      />
      {appError && <ErrorSnackbar error={appError} />}
      <SubmitReport
        customer={currentCustomer}
        purchase={currentItem}
        showReport={showReport}
        setShowReport={setShowReport}
      />
    </div>
  )
}

export default App
