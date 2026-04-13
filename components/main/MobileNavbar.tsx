"use client"

import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { Category } from "@/types";
import { Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import useCart from "@/hooks/useCart";
import IconButton from "../ui/IconButton";

interface MobileNavbarProps {
  data: Category[];
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const routes = data.map((category) => ({
    href: `/category/${category.id}`,
    label: category.name,
    active: pathname === `/category/${category.id}`,
  }));

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-3 md:hidden">
      <div className="relative">
        <IconButton
          onClick={() => router.push("/cart")}
          className="h-10 w-10 border-amber-400/25 bg-black/80 p-0"
          icon={<ShoppingCart size={20} />}
        />
        <span className="pointer-events-none absolute -right-2 -top-2 rounded-full border border-amber-400/30 bg-amber-300 px-1.5 py-0.5 text-[10px] font-semibold text-black">
          {cart.items.length}
        </span>
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/25 bg-black/80 text-stone-100 transition hover:text-amber-200"
      >
        <Menu size={20} />
      </button>

      <Transition show={open} as={Fragment} appear>
        <Dialog as="div" className="relative z-50 md:hidden" onClose={() => setOpen(false)}>
          <TransitionChild
            as={Fragment}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70" />
          </TransitionChild>

          <div className="fixed inset-0">
            <div className="flex h-full justify-end">
              <TransitionChild
                as={Fragment}
                enter="transform transition duration-300 ease-out"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition duration-200 ease-in"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="flex h-full w-full max-w-xs flex-col border-l border-amber-400/30 bg-stone-950 px-5 py-6 shadow-[0_24px_80px_rgba(212,175,55,0.12)]">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
                      Categories
                    </p>
                    <IconButton
                      onClick={() => setOpen(false)}
                      className="border-amber-400/25 bg-black/80"
                      icon={<X size={16} />}
                    />
                  </div>

                  <nav className="mt-6 flex flex-col gap-y-3">
                    {routes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "rounded-xl border px-4 py-3 text-base font-medium transition",
                          route.active
                            ? "border-amber-400/45 bg-amber-300 text-black"
                            : "border-white/10 bg-white/5 text-stone-200 hover:border-amber-400/35 hover:text-amber-200"
                        )}
                      >
                        {route.label}
                      </Link>
                    ))}
                  </nav>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MobileNavbar;
