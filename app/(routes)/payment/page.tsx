"use client"

import Link from "next/link"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import ProductPrice from "@/components/ui/ProductPrice"
import useCart from "@/hooks/useCart"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const EASYPAISA_NUMBER = "03171032052"
const WHATSAPP_URL = "https://wa.me/923171032052"
const EMAIL = "hhassanalk@gmail.com"

export default function PaymentPage() {
  const items = useCart((state) => state.items)
  const removeAll = useCart((state) => state.removeAll)
  const router = useRouter()

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.discountedPrice || item.price)
  }, 0)

  const handleDone = () => {
    removeAll()
    toast.success("Cart cleared")
    router.push("/")
  }

  return (
    <Container>
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-stone-950 via-black to-stone-900 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
          <div className="grid gap-10 border-b border-white/10 px-6 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-amber-200">Payment Details</p>
              <h1 className="mt-4 max-w-2xl text-3xl font-semibold text-white sm:text-5xl">
                Complete your order through EasyPaisa and share the payment receipt with us.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-stone-400">
                Send the payment to our EasyPaisa number, then forward your receipt on WhatsApp or email so we can confirm your order quickly.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-amber-400/20 bg-amber-300/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">EasyPaisa Number</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{EASYPAISA_NUMBER}</p>
                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    Please send the exact order amount to this number before sharing the receipt.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">After Payment</p>
                  <p className="mt-3 text-base leading-8 text-stone-300">
                    Send the receipt on WhatsApp or email so we can process and verify your order.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href={WHATSAPP_URL} target="_blank">
                  <Button className="w-full sm:w-auto">Send Receipt on WhatsApp</Button>
                </Link>
                <Link
                  href={`mailto:${EMAIL}?subject=Payment Receipt - Floriqu Order`}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-stone-100 transition hover:border-amber-400/35 hover:text-amber-200"
                >
                  Send Receipt by Email
                </Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-amber-400/15 bg-gradient-to-b from-white/[0.05] to-transparent p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <p className="text-lg font-medium text-stone-100">Order Summary</p>
                <span className="rounded-full border border-amber-400/25 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                  {items.length} items
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {items.length === 0 ? (
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm leading-7 text-stone-400">
                    Your cart is empty right now. Add products first, then return here to complete payment.
                  </div>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-medium text-stone-100">{item.name}</p>
                          <p className="mt-1 text-sm text-stone-400">
                            {item.category?.name} • {item.size?.name}
                          </p>
                        </div>
                        <ProductPrice price={item.price} discountedPrice={item.discountedPrice} />
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.18em] text-stone-400">Total Amount</p>
                  <div className="text-xl font-semibold text-amber-200">
                    <ProductPrice price={totalPrice} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 px-6 py-5 text-sm text-stone-400 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <p>Send payment to EasyPaisa number {EASYPAISA_NUMBER}.</p>
            <p>
              Share receipt on{" "}
              <Link href={WHATSAPP_URL} target="_blank" className="text-amber-200 transition hover:text-amber-100">
                WhatsApp
              </Link>{" "}
              or{" "}
              <Link href={`mailto:${EMAIL}`} className="text-amber-200 transition hover:text-amber-100">
                {EMAIL}
              </Link>
              .
            </p>
          </div>

          <div className="border-t border-white/10 px-6 py-6 lg:px-10">
            <Button disabled={items.length === 0} onClick={handleDone} className="w-full sm:w-auto">
              Done
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}
