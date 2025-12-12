"use client";

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { UserDetailContext } from "@/context/UserDetailContext";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image"
import Link from "next/link"
import { useContext, useState } from "react"

export function AppSidebar() {

    const {user} = useUser();

    const [projectList, setProjectList] = useState([])
    const {userDetail , setUserDetail} = useContext(UserDetailContext)
  return (
    <Sidebar>
      <SidebarHeader className="p-5">
        <div className="flex items-center gap-2">
            <Image src={'/logo.svg'} alt="Logo" width={55} height={55} />
            <h2 className='font-bold text-xl'>AutoBuild</h2>
        </div>

        <Link href={'/workspace'} className="mt-5 w-full">
            <Button className="cursor-pointer w-full">
                + Add New Project
            </Button>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarGroup>
            <SidebarGroupLabel className="text-xl">Projects</SidebarGroupLabel>
            {projectList.length == 0 && <h2 className="text-sm px-2">No Projects Found</h2>}
        </SidebarGroup>
      </SidebarContent>


        <SidebarFooter className="p-2">
            <div className="p-3 border rounded-xl space-y-3 bg-secondary">
                <h2 className="flex justify-between items-center">Remaining Credits: <span className="font-bold">{userDetail?.credits ?? "Loading ..."}</span></h2>
                <Progress value={50} />
                <Button className="w-full cursor-pointer">

                    Upgrade to Unlimited

                </Button>
            </div>

            <div className="p-3 border rounded-xl space-y-3 bg-secondary mt-3 mb-3">
                <div className="flex gap-3 items-center">
                    <UserButton/>
                    <div className="text-sm"><span className="font-bold">{user?.firstName}'s</span>{"  "}Workspace</div>  
                </div>
            </div>
        </SidebarFooter>
    </Sidebar>
  )
}