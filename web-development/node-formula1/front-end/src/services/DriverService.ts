import { DriverModel } from "@/models/DriverModel";

export async function getDrivers({id}: {id?: string}): Promise<DriverModel[]> {
    console.log("getDrivers called with id:", id);
    const res = !id ? await fetch("http://localhost:3333/drivers", {
        method: "GET",
        cache: "no-store",
    }) : await fetch(`http://localhost:3333/drivers/${id}`, {
        method: "GET",
        cache: "no-store",
    });
    const json = await res.json();

    console.log("Response from server:", json);
    console.log("Response status:", res.status);
    if (!res.ok && res.status !== 404 ) {
        throw new Error("Failed to fetch drivers");
    }

    return json ? (!id ?json.drivers : json.driver) : [];
}