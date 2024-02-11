import  { useState } from "react"
import QRCode from "qrcode" // You'll need to install this library

function App() {
  const [inputValue, setInputValue] = useState("")
  const [qrCode, setQRCode] = useState("")

  const generateQRCode = async () => {
    try {
      const generatedQRCode = await QRCode.toDataURL(inputValue)
      setQRCode(generatedQRCode)
    } catch (error) {
      console.error("Error generating QR code:", error)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <main className="bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center font-bold text-lg mb-4">
          QR Code Generator
        </div>
        <div className="mb-4 flex items-center">
          <input
            placeholder="Enter your url or text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 flex-1"
          />
          <button
            type="button"
            onClick={generateQRCode}
            className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            Generate
          </button>
        </div>
        <div className="text-center">
          {qrCode && (
            <img
              src={qrCode}
              alt="Generated QR Code"
              className="mt-4 mx-auto"
            />
          )}
        </div>
      </main>
    </div>
  )
}

export default App
