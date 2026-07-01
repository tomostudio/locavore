import { ElfsightWidget } from 'react-elfsight-widget'

// Renders a family member's Instagram feed through its Elfsight widget.
// Sanity's `elfsightCode` field stores the full `elfsight-app-<uuid>` class
// string, but the widget component only wants the UUID, so we strip the prefix.
const InstagramEmbed = ({ elfsightCode }) => {
  if (!elfsightCode) return null

  const widgetID = elfsightCode.replace('elfsight-app-', '')

  return (
    <div className='w-full mt-16 max-md:mt-10 border border-black rounded-2xl p-8 max-md:p-5'>
      <ElfsightWidget widgetID={widgetID} lazy />
    </div>
  )
}

export default InstagramEmbed
