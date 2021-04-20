import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// import { useSelector } from 'react-redux';
import { getLayout } from '@/layouts/main-layout/main-layout';

const Home = () => {
  const { t } = useTranslation('common');
  // const { name } = useSelector((state) => state.test);
  return <h1>{t('title')}</h1>;
};

Home.getLayout = getLayout;
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
export default Home;
