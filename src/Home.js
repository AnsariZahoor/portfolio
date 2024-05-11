import React from "react";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Skills from "./components/Skills";
import ProjectsItem from "./components/ProjectsItem";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex w-full">
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
        </div>
      </div>

      <div className="relative flex w-full flex-col">
        <main className="flex-auto">
        
        <Header/>

          <div className="sm:px-8 mt-24 md:mt-28">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-2">
                    
                    <ProjectsItem/>

                    <div className="space-y-10 lg:pl-16 xl:pl-24">
                      <Skills/>
                      <Work/>
                      <Contact/>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer/>

      </div>
    </div>
  );
}
