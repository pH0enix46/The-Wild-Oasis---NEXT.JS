// // //
// its only for cabins page and also its child whn any fetch hapeniing,, more in note, but inside that if some one has its own loading then its not wokring
import Spinner from "../_components/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-[var(--color-primary-200)]">
        Loading cabin data . . .
      </p>
    </div>
  );
}
