import { useRouter } from 'next/router';
import Layout from './layout';

const Tab = () => {
    const router = useRouter();
    const { tab } = router.query;

    const tabName = tab as string;

    return (
        <Layout>
            {tabName ? `${tabName.charAt(0).toUpperCase() + tabName.slice(1)} tab content` : 'Loading...'}
        </Layout>
    );
};

export default Tab;