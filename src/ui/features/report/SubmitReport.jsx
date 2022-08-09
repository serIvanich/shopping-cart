import Modal from '../../common/modal/Modal'
import s from './SubmitReport.module.scss'

export function SubmitReport({
  customer,
  purchase,
  showReport,
  setShowReport,
}) {
  const closeModalOnClick = () => {
    setShowReport(false)
  }
  if (!showReport) return null

  return (
    <Modal closeModalOnClick={closeModalOnClick} show={showReport}>
      <div className={s.reportContainer}>
        <div className={s.textReport}>
          Dear <span>{customer.name}</span>
        </div>
        <div className={s.textReport}>
          Your purchase: <span>{purchase.name}</span>
        </div>
        <div className={s.textReport}>
          We are really happy that you visited us and bought our product! Thank
          you!
        </div>
      </div>
    </Modal>
  )
}
