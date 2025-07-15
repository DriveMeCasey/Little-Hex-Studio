"use server"

export async function submitContactForm(_prevState: unknown, formData: FormData) {
  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const name = formData.get("name")
  const email = formData.get("email")
  const messageType = formData.get("messageType")
  const message = formData.get("message")

  // In a real application, you would process the form data here (e.g., save to database, send email)
  console.log("Form submitted:", { name, email, messageType, message })

  // Simulate success response
  return {
    success: true,
    message: "✨ Your spell has been cast!",
    supportingText: "Our familiars are delivering it now. We’ll conjure up a reply soon!",
  }
}
