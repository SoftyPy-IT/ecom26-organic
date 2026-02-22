"use client"
import Container from '../Container'
import SubmitButton from '../buttons/SubmitButton'
import TextArea from '../inputs/TextArea'
import TextInput from '../inputs/TextInput'
import AppForm from './AppFrom'

export default function Contact() {

  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <Container className="px-2 2xl:px-0">
      <AppForm onSubmit={onSubmit}>
        <div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="w-full">
              <TextInput name="name" label="Name" />
            </div>
            <div className="w-full">
              <TextInput name="email" label="Email" />
            </div>
          </div>
          <TextInput name="subject" label="Subject" />
          <TextArea name="message" label="Message" />
          <SubmitButton />
        </div>
      </AppForm>
    </Container>
  )
}
