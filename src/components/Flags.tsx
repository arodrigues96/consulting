export function BrazilFlag({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}256px-Flag_of_Brazil.svg.png`}
      alt="Brazil Flag"
      className={className}
    />
  )
}

export function USFlag({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}256px-Flag_of_the_United_States.svg.png`}
      alt="United States Flag"
      className={className}
    />
  )
}
