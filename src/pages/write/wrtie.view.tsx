import { useForm } from 'react-hook-form'

function WritingPageView() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="제목" {...(register('example'), { required: true })} />
      <input {...(register('exampleRequired'), { required: true })} />

      <input type="submit"></input>
    </form>
  )
}
export default WritingPageView
