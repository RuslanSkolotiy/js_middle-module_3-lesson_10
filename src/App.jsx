import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Page404 from "./pages/Page404";
import Signin from "./pages/Login/Signin";
import { AuthProvider } from "./context";
import PrivateRoute from "./components/hoc/PrivateRoute";
import NavigationMenu from "./components/NavigationMenu";
import { Suspense } from "react";
import ErrorBoundary from "./components/hoc/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import { CharactersList, CharactersDetail } from "./pages/Characters";
import { EpisodeList, EpisodeDetail } from "./pages/Episode";
import { LocationList, LocationDetail } from "./pages/Location";
import { MantineProvider, Text } from "@mantine/core";

function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <BrowserRouter>
                <AuthProvider>
                    <NavigationMenu />

                    <Suspense>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route
                                path="/characters"
                                element={
                                    <PrivateRoute>
                                        <ErrorBoundary key="1">
                                            <CharactersList />
                                        </ErrorBoundary>
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/characters/:elementId"
                                element={
                                    <PrivateRoute>
                                        <ErrorBoundary>
                                            <CharactersDetail />
                                        </ErrorBoundary>
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/location"
                                element={
                                    <PrivateRoute>
                                        <ErrorBoundary key="2">
                                            <LocationList />
                                        </ErrorBoundary>
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/location/:elementId"
                                element={
                                    <PrivateRoute>
                                        <ErrorBoundary>
                                            <LocationDetail />
                                        </ErrorBoundary>
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/episode"
                                element={
                                    <PrivateRoute>
                                        <ErrorBoundary key="3">
                                            <EpisodeList />
                                        </ErrorBoundary>
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/episode/:elementId"
                                element={
                                    <PrivateRoute>
                                        <ErrorBoundary>
                                            <EpisodeDetail />
                                        </ErrorBoundary>
                                    </PrivateRoute>
                                }
                            />
                            <Route path="/login" element={<Signin />} />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </AuthProvider>
            </BrowserRouter>
        </MantineProvider>
    );
}

export default App;
