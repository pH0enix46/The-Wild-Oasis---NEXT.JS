// // //
import { getBookedDatesByCabinId, getCabin } from "@/app/_library/data-service";

// creating api endpoint with route handlers
//  note get post, .....more for nextjs api route.js convention
export async function GET(request, { params }) {
  // console.log(request);
  // console.log(params);
  const { cabinId } = await params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return Response.json({ cabin, bookedDates }); // note
  } catch (error) {
    return Response.json({ message: "Cabin not found!" });
  }
}
