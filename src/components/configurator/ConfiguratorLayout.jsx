import React from "react";

import Breadcrumb from './Breadcrumb';
import CarViewer from "./CarViewer";
import PriceSummary from './PriceSummary';
import StepNavigation from "./StepNavigation";

function ConfiguratorLayout({children}){

    return (

        <div className="min-h-screen bg-base-200 p-4">

            {/* Breadcrumb */}

            {/*<Breadcrumb />*/}

            {/* Main layout */}

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">

                {/* Viewer + options */}

                <div className="lg:col-span-3 space-y-4"> 

                    {/* CAR VIEWER (GLOBAL) */}

                    <CarViewer />

                    {/* STEP CONTENT */}                  

                    <div className="bg-base-100 rounded-2xl p-4 shadow">

                        {children}

                    </div>

                </div>

                {/* Sidebar */}

                <div className="h-full sticky top-4">

                    <PriceSummary />

                </div>

            </div>

            {/* Navigation */}

            <div className="sticky bottom-2 z-50 mt-8">

                <StepNavigation />

            </div>

        </div>

    );
}

export default ConfiguratorLayout;