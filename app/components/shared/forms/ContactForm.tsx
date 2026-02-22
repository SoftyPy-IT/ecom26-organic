"use client"
import Container from '../Container'
import SubmitButton from '../buttons/SubmitButton'
import TextArea from '../inputs/TextArea'
import TextInput from '../inputs/TextInput'
import AppForm from './AppFrom'

export default function ContactForm() {

  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <Container className="px-2 2xl:px-0">
      <AppForm onSubmit={onSubmit}>
        <div className='space-y-4'>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="w-full">
              <TextInput name="name" label="Name" placeholder="Enter your name" required />
            </div>
            <div className="w-full">
              <TextInput name="email" label="Email" placeholder="Enter your email" required />
            </div>
          </div>
          <TextInput name="subject" label="Subject" placeholder="Enter your subject" required />
          <TextArea name="message" label="Message" placeholder="Enter your message" required />
          <SubmitButton />
        </div>
      </AppForm>
    </Container>
  )
}
