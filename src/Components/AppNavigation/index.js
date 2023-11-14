import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useRoutes, BrowserRouter as Router } from 'react-router-dom';
import { MOBOOM_PATH } from '../Constent/path';



const { PATH } = MOBOOM_PATH;

const LoadableComponent = (Component) => (props) => {
    return (
        <Suspense
            fallback={
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {/* <Spinner /> */}
                </div>
            }
        >
            <Component {...props} />
        </Suspense>
    );
};

const HomeUIComponent = LoadableComponent(lazy(() => import('../HomeUI')));



export const AppNavigation = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path={PATH} element={<HomeUIComponent />} />
                    <Route path="*" element={<Navigate to={PATH} replace />} />
                </Routes>
            </Router>
        </>
    );
};
