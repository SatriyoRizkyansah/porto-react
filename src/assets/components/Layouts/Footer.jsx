const Footer = () => {
  return (
    <footer class="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-6 border-t border-gray-200 dark:border-neutral-700">
        <div class="flex flex-wrap justify-between items-center gap-2">
          <div>
            <p class="text-gray-60 text-[10px] lg:text-xs">© Satriyo Rizkyansah | 2024.</p>
          </div>
          {/* <!-- End Col --> */}

          {/* <!-- List --> */}
          <ul class="flex flex-wrap items-center">
            <li class="flex items-center gap-x-2.5">
              <svg class="shrink-0 size-3.5 -mr-1.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a class="text-[10px] lg:text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-800" href="mailto:satriyorizkyansah@gmail.com">
                satriyorizkyansah@gmail.com
              </a>
            </li>
          </ul>
          {/* <!-- End List --> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
