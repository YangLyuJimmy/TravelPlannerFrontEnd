import {Component} from "react";
import {Layout} from "antd";
import {Route, Routes, Navigate} from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import PlacesPage from "../pages/PlacesPage";
import HowManyDayPage from "../pages/HowManyDayPage";
import UserProfile from "../pages/UserProfile";
import GoogleMapPage from "../pages/GoogleMapPage"

const { Content } = Layout;

class AppContent extends Component {
    render() {
        return (
            <>
                <Content style={{ height: "calc(100% - 64px)", margin: 20, overflow: "auto" }}>
                    <Routes>
                        <Route path="/search" element={<SearchPage />}/>
                        <Route path="/places" element={<PlacesPage />}/>
                        <Route path="/days" element={<HowManyDayPage />}/>
                        <Route path="/profile" element={<UserProfile />}/>
                        <Route path="/map" element={<GoogleMapPage />}/>
                        <Route path="*" element={<Navigate to="/search" replace/>}/>
                    </Routes>
                </Content>
            </>
        )
    }
}

export default AppContent;