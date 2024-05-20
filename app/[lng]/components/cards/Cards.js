import { useTranslation } from '../../../i18n'

const Cards = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'cards');
  return (
    <figure>
      <img src={t('image')} alt="jorge"/>
      <h3>{t('title')}</h3>
      <p>{t('description')}</p>
    </figure>
  )
}

export default Cards