import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";
import "../style/profile.css";

const MyProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { backendUrl, token, navigate } = useContext(ShopContext);

  const loadProfileData = async () => {
    try {
      if (!token) {
        setProfileData(null);
        setLoading(false);
        return;
      }
      setLoading(true);
      const response = await axios.get(`${backendUrl}/api/profile`, {
        headers: { token },
      });
      if (response.data.success) {
        setProfileData(response.data.profile);
      } else {
        toast.error(response.data.message);
        setProfileData(null);
      }
    } catch (error) {
      toast.error(error.message);
      setProfileData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProfileData();
    // eslint-disable-next-line
  }, [token]);

  if (!token) {
    return (
      <div className="profile-container">
        <div className="profile-title">
          <h1>My Profile</h1>
        </div>
        <div className="profile-details">
          <p>Please login to see your profile.</p>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-title">
        <h1>My Profile</h1>
      </div>
      {loading ? (
        <p>Loading profile data...</p>
      ) : profileData ? (
        <div className="profile-details">
          <div className="profile-item">
            <h2>Name:</h2>
            <p>{profileData.name}</p>
          </div>
          <div className="profile-item">
            <h2>Email:</h2>
            <p>{profileData.email}</p>
          </div>
        </div>
      ) : (
        <p>Could not load profile data.</p>
      )}
    </div>
  );
};

export default MyProfile;