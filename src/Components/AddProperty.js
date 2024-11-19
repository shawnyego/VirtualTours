import React, { useState } from "react";

export const AddProperty = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [propertyType, setPropertyType] = useState("House");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [squareFeet, setSquareFeet] = useState("");
    const [status, setStatus] = useState("Available");
    const [youtubeTourLink, setYoutubeTourLink] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("location", location);
        formData.append("price", price);
        formData.append("propertyType", propertyType);
        formData.append("bedrooms", bedrooms);
        formData.append("bathrooms", bathrooms);
        formData.append("squareFeet", squareFeet);
        formData.append("status", status);
        formData.append("youtubeTourLink", youtubeTourLink);
        if (image) {
            formData.append("image", image);
        }

        try {
            const response = await fetch("http://localhost:3001/add-property", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Property added successfully");
                setName("");
                setDescription("");
                setLocation("");
                setPrice("");
                setPropertyType("House");
                setBedrooms("");
                setBathrooms("");
                setSquareFeet("");
                setStatus("Available");
                setYoutubeTourLink("");
                setImage(null);
            } else {
                alert("Failed to add property");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Property</h2>
            <div>
                <label>Property Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
            </div>
            <div>
                <label>Location</label>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Price</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Property Type</label>
                <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                >
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Condo</option>
                    <option>Commercial</option>
                </select>
            </div>
            <div>
                <label>Bedrooms</label>
                <input
                    type="number"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                />
            </div>
            <div>
                <label>Bathrooms</label>
                <input
                    type="number"
                    step="0.1"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                />
            </div>
            <div>
                <label>Square Feet</label>
                <input
                    type="number"
                    value={squareFeet}
                    onChange={(e) => setSquareFeet(e.target.value)}
                />
            </div>
            <div>
                <label>Status</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option>Available</option>
                    <option>Sold</option>
                    <option>Pending</option>
                </select>
            </div>
            <div>
                <label>YouTube Tour Link</label>
                <input
                    type="url"
                    value={youtubeTourLink}
                    onChange={(e) => setYoutubeTourLink(e.target.value)}
                />
            </div>
            <div>
                <label>Property Image</label>
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                />
            </div>
            <button type="submit">Submit Property</button>
        </form>
    );
};

export default AddProperty;
