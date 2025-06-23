import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../style/profile.css";

const MyProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const backendUrl = "http://localhost:4000"; // Replace with your backend URL
  const token = localStorage.getItem("token"); // Replace with your token retrieval logic

  const loadProfileData = async () => {
    try {
      if (!token) {
        toast.error("User is not authenticated.");
        return;
      }
      const response = await axios.get(`${backendUrl}/api/profile`, {
        headers: { token },
      });
      if (response.data.success) {
        setProfileData(response.data.profile);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    loadProfileData();
  }, [token]);

  return (
    <div className="profile-container">
      <div className="profile-title">
        <h1>My Profile</h1>
      </div>
      {profileData ? (
        <div className="profile-details">
          <div className="profile-item">
            <h2>Name:</h2>
            <p>{profileData.name}</p>
          </div>
          <div className="profile-item">
            <h2>Email:</h2>
            <p>{profileData.email}</p>
          </div>
          <div className="profile-item">
            <h2>Cart Data:</h2>
            <pre>{JSON.stringify(profileData.cartData, null, 2)}</pre>
          </div>
        </div>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
};

export default MyProfile;