'use client'

import { useState } from 'react'
import InputField from './InputField'
import InputFieldDropdown from './InputFieldDropdown'

export default function ContactUs({ type_of_request = 'Information' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date_from: '',
    date_to: '',
    anglers: '',
    non_anglers: '',
    country: '',
    message: '',
    type_of_request: type_of_request,
    agreeToContact: false,
  })

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({ ...formData, [e.target.name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Thank you for your enquiry. We will get back to you soon!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          date_from: '',
          date_to: '',
          anglers: '',
          non_anglers: '',
          country: '',
          message: '',
          type_of_request: type_of_request,
          agreeToContact: false,
        })
      } else if (response.status === 400) {
        alert('Please fill in your name, email, and phone number.')
      } else {
        throw new Error('Failed to send email: ' + response.statusText)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again later.')
    }
  }

  return (
      <section className="py-12">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                label="Name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputField
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="From"
                  name="date_from"
                  type="date"
                  value={formData.date_from}
                  onChange={handleChange}
                />
                <InputField
                  label="To"
                  name="date_to"
                  type="date"
                  value={formData.date_to}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Number of Anglers"
                  name="anglers"
                  type="number"
                  placeholder="Number of guests who will be fishing"
                  value={formData.anglers}
                  onChange={handleChange}
                />
                <InputField
                  label="Number of non-anglers"
                  name="non_anglers"
                  type="number"
                  placeholder="Number of guests who will not be fishing"
                  value={formData.non_anglers}
                  onChange={handleChange}
                />
                <InputField
                  label="Country"
                  name="country"
                  type="text"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Please provide any information about your request
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Any special requests or additional information"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    name="agreeToContact"
                    checked={formData.agreeToContact}
                    onChange={handleChange}
                    className="rounded border-gray-300 bg-gray-50 text-blue-500 focus:ring-blue-500 mr-2"
                    required
                  />
                  <span className="text-sm">
                    I agree to be contacted by Nervous Marlin via email. To opt out in the future, you can click the unsubscribe link in the email.
                  </span>
                </label>
                <p className="text-sm mt-4 text-gray-600">
                  By submitting the contact form and signing up for text, you consent to receive text messages from Nervous Marlin. Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply. You can unsubscribe at any time by replying STOP.
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-200 text-sky-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-300 transition duration-300"
                >
                  Send booking request
                </button>
              </div>
              <div>
                <p className="text-gray-700">We will get back to you as soon as possible.</p>
              </div>
            </form>
          </div>
        </div>
      </section>
  )
}

