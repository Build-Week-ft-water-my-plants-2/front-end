import * as yup from 'yup';

const formSchema = yup.object().shape({
    nickname: yup
        .string()
        .trim()
        .required('Follow input guidelines')
        .min(3, 'Follow input guidelines'),
    species: yup
        .string()
        .trim()
        .required('Follow input guidelines')
        .min(3, 'Follow input guidelines'),
    h2oFrequency: yup
        .string()
        .trim()
        .required('Follow input guidelines')
        .min(3, 'Follow input guidelines'),
    imageURL: yup
        .string()
})

export default formSchema;

