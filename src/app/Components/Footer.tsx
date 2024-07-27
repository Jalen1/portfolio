export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center items-center flex-col space-y-10 pb-10 relative -z-50">
        <div className="flex font-normal text-lg">
          <p>Jalen Wu © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
