import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Layout, LayoutBody, LayoutHeader } from "../elements/custom/layout";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { logout } from "../../services/auth";
import { useEffect } from "react";
import CustomerTable from "../elements/custom/customer-overview";
import useCustomerStore from "../../services/store";

export default function Dashboard() {
    const userItem = localStorage.getItem("user");
    const user = userItem ? JSON.parse(userItem) : null;

    const handleLogout = async () => {
        logout();
        window.location.href = "/login";
    };

    const customerStore = useCustomerStore();

    useEffect(() => {
        customerStore.actions.customer.fetchAll();
    }, []);

    return (
        <Layout>
            {/* ===== Main ===== */}
            <LayoutBody className="space-y-4">
                <div className="flex items-center justify-between space-y-2">
                    <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                        Dashboard
                    </h1>
                    <div className="flex items-center space-x-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button>{user.username}</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 mr-4">
                                <DropdownMenuItem
                                    onClick={handleLogout}
                                    className="hover:cursor-pointer"
                                >
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <Tabs
                    orientation="vertical"
                    defaultValue="overview"
                    className="space-y-4"
                >
                    <div className="w-full overflow-x-scroll pb-2">
                        <TabsList>
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="customers">
                                Customers
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="customers" className="space-y-4">
                        <CustomerTable />
                    </TabsContent>
                    <TabsContent value="overview" className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total Customers
                                    </CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        {
                                            customerStore.getters.getAllCustomers()
                                                .length
                                        }
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
                            {/* <Card className="col-span-1 lg:col-span-4">
                                <CardHeader>
                                    <CardTitle>Overview</CardTitle>
                                </CardHeader>
                                <CardContent className="pl-2">
                                    <Overview />
                                </CardContent>
                            </Card>
                            <Card className="col-span-1 lg:col-span-3">
                                <CardHeader>
                                    <CardTitle>Recent Sales</CardTitle>
                                    <CardDescription>
                                        You made 265 sales this month.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <RecentSales />
                                </CardContent>
                            </Card> */}
                        </div>
                    </TabsContent>
                </Tabs>
            </LayoutBody>
        </Layout>
    );
}
