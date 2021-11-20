import * as yup from "yup"

const formSchema = yup.object().shape({
  nickname: yup
    .string()
    .trim()
    .required("Nickname is required.")
    .min(3, "Nickname requires at least 3 characters."),
  species: yup
    .string()
    .trim()
    .required("Species is required.")
    .min(3, "Species requires at least 3 characters."),
  h2oFrequency: yup
    .string()
    .trim()
    .required("Water frequency is required.")
    .min(3, "Water frequency requires at least 3 characters."),
  imageURL: yup.string(),
})

export default formSchema
