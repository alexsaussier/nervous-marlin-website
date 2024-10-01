export default function Footer(){
return (
<footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto flex justify-between">
    <div>
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <p>Phone: +1 234 567 8900</p>
        <p>Email: info@nervousmarlin.com</p>
    </div>
    <div>
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
        {/* Add social media icons here */}
    </div>
    </div>
</footer>
)
}