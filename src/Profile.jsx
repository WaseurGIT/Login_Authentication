import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosSecure from "./axiosSecure";
import { jwtDecode } from "jwt-decode";

const Profile = () => {
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    const decoded = jwtDecode(token);
    const userEmail = decoded.email;

    axiosSecure
      .get(`/updateProfile/${userEmail}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => console.error(error));

    axiosSecure
      .get(`/users/${userEmail}`)
      .then((res) => setUser(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600"></div>

      <div className="px-4 py-8 max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden -mt-16 relative z-10">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
              <div className="mb-4 md:mb-0">
                <img
                  src={profile.profilePicture}
                  alt={profile.name}
                  className="w-24 h-24 rounded-full border-4 border-blue-600 object-cover"
                />
              </div>

              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-1">
                  {profile.name}
                </h1>
                <p className="text-gray-600 mb-4">{profile.bio}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-gray-900 font-medium">{profile.email}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-100">
                  <svg
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 7.492a1 1 0 00.502.756l4.618 2.311a1 1 0 001.497-1.295l-1.639-8.194a1 1 0 00-.312-.291l7.071-7.071a1 1 0 00-1.414-1.414L9.172 9.172a1 1 0 00-.291-.312l-8.194-1.639a1 1 0 00-1.295 1.497l2.311 4.618a1 1 0 00.757.502l7.492 1.498a1 1 0 00.684.948V19a2 2 0 01-2 2h-3a2 2 0 01-2-2V5z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Phone</p>
                <p className="text-gray-900 font-medium">{profile.phone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Location</p>
                <p className="text-gray-900 font-medium">{profile.location}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-orange-100">
                  <svg
                    className="h-6 w-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3a1 1 0 00-1-1H4a1 1 0 00-1 1v4m16-4v4m0 0V3a1 1 0 00-1-1h-3a1 1 0 00-1 1v4m0 0h4m-11 8v2m0-12v2m7-2v2m0-12v2"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Member Since
                </p>
                <p className="text-gray-900 font-medium">{user.createdAt}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:justify-end gap-3">
            {" "}
            <Link
              to="/editProfile"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition duration-200 shadow-lg hover:shadow-xl"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
