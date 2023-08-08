import { ref, onMounted } from 'vue';
import apiMedizona from '../../../api/config';

const useFetch = (route = '') => {
    const response = ref([]);

    async function getData() {
        try {
            const { data } = await apiMedizona.get(route);
            response.value = data.data;
        } catch (err) {
            console.log(err)
        }
    }

    onMounted(() => {
        getData();
    });

    return { response };
}

export default useFetch;