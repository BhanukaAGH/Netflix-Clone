import { CheckIcon } from '@heroicons/react/outline'
import { Product } from '@stripe/firestore-stripe-payments'

interface Props {
  products: Product[]
  selectedPlan: Product | null
}

const Table = ({ products, selectedPlan }: Props) => {
  return (
    <table>
      <tbody className='divide-y divide-[gray]'>
        <tr className='tableRow'>
          <td className='tableDataTitle'>Monthly price</td>
          {products.map((plan) => (
            <td
              key={plan.id}
              className={`tableDataFeature ${
                selectedPlan?.id === plan.id ? 'text-[#e50914]' : 'text-[gray]'
              }`}
            >
              USD{plan.prices[0].unit_amount! / 100}
            </td>
          ))}
        </tr>
        <tr className='tableRow'>
          <td className='tableDataTitle'>Video quality</td>
          {products.map((plan) => (
            <td
              key={plan.id}
              className={`tableDataFeature ${
                selectedPlan?.id === plan.id ? 'text-[#e50914]' : 'text-[gray]'
              }`}
            >
              {plan.metadata.videoQuality}
            </td>
          ))}
        </tr>
        <tr className='tableRow'>
          <td className='tableDataTitle'>Resolution</td>
          {products.map((plan) => (
            <td
              key={plan.id}
              className={`tableDataFeature ${
                selectedPlan?.id === plan.id ? 'text-[#e50914]' : 'text-[gray]'
              }`}
            >
              {plan.metadata.resolution}
            </td>
          ))}
        </tr>
        <tr className='tableRow'>
          <td className='tableDataTitle'>
            Watch on your TV, computer, mobile phone and tablet
          </td>
          {products.map((plan) => (
            <td
              key={plan.id}
              className={`tableDataFeature ${
                selectedPlan?.id === plan.id ? 'text-[#e50914]' : 'text-[gray]'
              }`}
            >
              {plan.metadata.portability === 'true' ? (
                <CheckIcon className='inline-block h-8 w-8' />
              ) : (
                '_'
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default Table
