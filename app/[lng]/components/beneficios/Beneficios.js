'use client';
import { useTranslation } from '../../../i18n/client'

const Beneficios = ({ lng }) => {
    const { t } = useTranslation(lng, 'beneficios');
	return (
		<div>
            <h2>{t('title')}</h2>
            <h3>{t('subtitle')}</h3>
            <p>{t('destription')}</p>
        </div>
	);
};

export default Beneficios;